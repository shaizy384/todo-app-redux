export const addListItem = (item) => {
    return {
        type: "ADDTOLIST",
        payload: { id: new Date().getTime().toString(), item: item }
    }
}

export const deleteListItem = (id) => {
    return {
        type: "DELETEFROMLIST",
        payload: id
    }
}

export const removeAllItems = () => {
    return {
        type: "REMOVEALLLIST"
    }
}