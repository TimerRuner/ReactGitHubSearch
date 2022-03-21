import React, { useContext, useState } from "react"
import { AlertContext } from "../context/alert/alertContext"

export const Search = () => {
    const [value, setValue] = useState("")
    const { show } = useContext(AlertContext)

    const onSubmit = (event) => {
        if (event.key !== "Enter") {
            return
        }
        if (value.trim()) {
            //todo запит на отримання даних
            console.log("Make request with: ", value)
        } else {
            show("Введіть пошуковий запит!", "danger")
        }
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Enter nikname"
                onKeyDown={onSubmit}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </div>
    )
}
