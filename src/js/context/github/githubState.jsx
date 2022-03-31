import React, { useReducer } from "react"
import { GithubContext } from "./githubContext"
import { githabReducer } from "./githabReducer"
import {
    SEARCH_USERS,
    GET_USER,
    GET_REPOS,
    CLEAR_USERS,
    SET_LOADING,
} from "../types.js"
import axios from "axios"
import {
    REACT_APP_CLIENT_ID,
    REACT_APP_CLIENT_SECRET,
} from "../../variables/variables.js"

const withCreds = (url) => {
    return `${url}client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}`
}

export const GithubState = ({ children }) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: [],
    }
    const [state, dispatch] = useReducer(githabReducer, initialState)

    const search = async (value) => {
        setLoading()

        const response = await axios.get(
            withCreds(`https://api.github.com/search/users?q=${value}&`)
        )

        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items,
        })
    }

    const getUser = async (name) => {
        setLoading()

        const response = await axios.get(
            `https://api.github.com/users/${name}?client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}`
        )

        dispatch({
            type: GET_USER,
            payload: response.data,
        })
    }

    const getRepos = async (name) => {
        setLoading()

        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`)
        )

        dispatch({
            type: GET_REPOS,
            payload: response.data,
        })
    }

    const clearUsers = () => dispatch({ type: CLEAR_USERS })

    const setLoading = () => dispatch({ type: SET_LOADING })

    const { user, users, repos, loading } = state

    return (
        <GithubContext.Provider
            value={{
                setLoading,
                clearUsers,
                getRepos,
                getUser,
                search,
                user,
                users,
                repos,
                loading,
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}
