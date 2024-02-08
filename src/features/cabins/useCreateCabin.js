import { useQueryClient, useMutation } from "@tanstack/react-query";
import {toast} from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabin() {
    const queryClient = useQueryClient()

    const { mutate: createCabin, isLoading: isCreating } = useMutation({
      mutationFn: createEditCabin,
      onSuccess: () => {
        toast.success("New Cabin successfully created");
        queryClient.invalidateQueries({ queryKey: ["cabins"]})
      },
      onError: (error) => toast.error(error.message)
    })

    return {isCreating, createCabin}
}