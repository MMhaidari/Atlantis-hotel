import supabase, { supabaseUrl } from "./supabase"

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

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', "")
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
    
    const { data, error } = await supabase
    .from('cabins')
    .insert([{...newCabin, image: imagePath}])

    
    if (error) {
        console.log(error)
        throw new Error('Cabins Could not be Created')
    }

    const { error: storageError } = await supabase.storage.from('cabin-images').upload(imageName, newCabin.image)

    if (storageError) {
     await supabase.from('cabins').delete().eq('id', data.id)
     console.error(storageError)
     throw new Error('Cabins image Could not be uploaded and the cabin was not created')
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