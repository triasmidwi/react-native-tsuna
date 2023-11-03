import ApiManager from "./ApiManager";

export const regist_user = async data => {
    try {
        const result = await ApiManager("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        })
        return result
    } catch (error) {
        return error.response.data
    }
}