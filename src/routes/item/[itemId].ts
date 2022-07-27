export async function get({ params }) {
    const { itemId } = params
    return {
        body: {
            itemId
        },
    }
}