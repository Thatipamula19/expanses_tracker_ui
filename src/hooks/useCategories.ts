import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/transactionService";
import type { FilterType } from "@/types/transactions";

export const useCategories = () => {
	return useQuery({
		queryKey: ["categories"],
		queryFn: async () => {
			const data = await getCategories();
			// Map API response to FilterType format if needed
			// Assuming API returns an array of objects with label and value
			return data?.categories?.map((cat: any) => ({
				label: cat.name || cat.label,
				value: cat.id || cat.value,
			})) as FilterType[];
		},
		staleTime: 1000 * 60 * 60, // 1 hour
	});
};
