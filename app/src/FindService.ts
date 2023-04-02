interface Offer {
    name: string,
    price: number
}

export class FindService {
    public static async find(): Promise<Offer[]> {
        return new Promise<Offer[]>(resolve => {
            setTimeout(() => {
                resolve([{
                    name: "John Bug",
                    price: 200
                }])
            }, 2200)
        })
    }
}