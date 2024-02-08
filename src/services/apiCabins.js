import supabase from "./supabase"

export async function getCabins() {    
    const { data, error } = await supabase
    .from('cabins')
    .select('*')

    if (error) {
        console.log(error)
        throw new Error('Cabins Could not be loaded')
    }

    return data
}

export async function createCabin(newCabin) {
    
    const { data, error } = await supabase
    .from('cabins')
    .insert([newCabin])

    
    if (error) {
        console.log(error)
        throw new Error('Cabins Could not be Created')
    }

    return data

}

export async function deleteCabin(id) {
    const { data, error } = await supabase.from('cabins').delete().eq('id', id)

    if (error) {
        console.log(error)
        throw new Error('Cabins Could not be deleted')
    }

    return data
}