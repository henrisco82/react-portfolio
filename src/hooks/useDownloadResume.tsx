// src/hooks/useDownloadResume.ts
import { useMutation } from '@tanstack/react-query';

export const useDownloadResume = () => {
    return useMutation({
        mutationFn: async () => {
            const res = await fetch('https://portfolio-backend-sqyd.onrender.com/cv');
            if (!res.ok) throw new Error('Failed to download resume');
            return res.blob();
        },
        onSuccess: (blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Henry_Unah_Resume.pdf'; // The filename to save
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    });
};
