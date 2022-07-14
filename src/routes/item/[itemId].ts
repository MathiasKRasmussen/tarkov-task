export async function get({ params }) {
    const { itemId } = params
    console.log(itemId)
    return {
        body: {
            itemId
        },
    }
}