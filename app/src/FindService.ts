export interface IOffer {
    serial: string,
    photo: string,
    name: string,
    price: number,
    time: number
}

export class FindService {
    public static async find(): Promise<IOffer[]> {
        return new Promise<IOffer[]>(resolve => {
            setTimeout(() => {
                resolve([{
                    serial: "XYZ",
                    photo: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                    name: "John Bug",
                    price: 200,
                    time: 5
                }, {
                    serial: "XYA",
                    photo: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                    name: "Daniels Task",
                    price: 212,
                    time: 4
                }, {
                    serial: "XYB",
                    photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                    name: "Blessd Pirlo",
                    price: 202,
                    time: 6
                }])
            }, 2200)
        })
    }
}