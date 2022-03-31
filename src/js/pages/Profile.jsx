import React, { useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Repos } from "../component/Repos"
import { GithubContext } from "../context/github/githubContext"
import { Loader } from "../UI/Loader"

export const Profile = () => {
    const { name: url_name } = useParams()
    const { getUser, getRepos, loading, user, repos } =
        useContext(GithubContext)

    useEffect(() => {
        getUser(url_name)
        getRepos(url_name)
    }, [])

    if (loading) {
        return <Loader />
    }

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        public_repos,
        public_gists,
        following,
    } = user

    return (
        <React.Fragment>
            <Link to="/" className="btn btn-link">
                Home
            </Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="text-center">
                            <img
                                src={avatar_url}
                                alt={name}
                                style={{ width: "150px" }}
                            />
                            <h1>{name}</h1>
                            {location && <p>Location: {location}</p>}
                        </div>
                        <div className="col">
                            {bio && (
                                <React.Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </React.Fragment>
                            )}

                            <ul>
                                {login && (
                                    <li>
                                        <strong>Username: </strong>
                                        {login}
                                    </li>
                                )}
                                {company && (
                                    <li>
                                        <strong>Company: </strong>
                                        {company}
                                    </li>
                                )}
                                {blog && (
                                    <li>
                                        <strong>Website: </strong>
                                        {blog}
                                    </li>
                                )}
                            </ul>

                            <div
                                className="badge bg-primary"
                                style={{ marginRight: "5px" }}
                            >
                                Followers: {followers}
                            </div>
                            <div
                                className="badge bg-success"
                                style={{ marginRight: "5px" }}
                            >
                                Following: {following}
                            </div>
                            <div
                                className="badge bg-info"
                                style={{ marginRight: "5px" }}
                            >
                                Publi Repos: {public_repos}
                            </div>
                            <div
                                className="badge bg-dark"
                                style={{ marginRight: "5px" }}
                            >
                                Public Gists: {public_gists}
                            </div>
                            <div style={{ margin: "10px 0" }}>
                                <a
                                    href={html_url}
                                    target="_blank"
                                    className="btn btn-dark"
                                >
                                    Відкрити профіль
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos} />
        </React.Fragment>
    )
}
