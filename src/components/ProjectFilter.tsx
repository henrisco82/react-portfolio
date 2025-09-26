import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface Props {
    filters: string[];
    selected: string;
    onChange: (value: string) => void;
}

export default function ProjectFilter({ filters, selected, onChange }: Props) {
    return (
        <ToggleGroup.Root
            type="single"
            value={selected}
            onValueChange={(value) => value && onChange(value)}
            className="flex flex-wrap gap-2 mb-8"
        >
            {filters.map((filter) => (
                <ToggleGroup.Item
                    key={filter}
                    value={filter}
                    className={`px-4 py-2 rounded-md text-sm font-medium border 
            ${selected === filter
                            ? "bg-purple-600 text-white border-purple-600"
                            : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                        }`}
                >
                    {filter}
                </ToggleGroup.Item>
            ))}
        </ToggleGroup.Root>
    );
}
