
const baseURL = "localhost:3001"

export const sendFormData = async (body) => {
    const { id } = body.id 
    return await fetch(`${baseURL}/doctor/`)
}

// export const sendFormData2 = async (body) => {
//     const { id } = body.id 
//     return await fetch(`${baseURL}/doctor/`, {
//         method: "POST",
//         body: body
//     })
// }