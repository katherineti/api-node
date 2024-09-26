import { response } from "express"

const get = async(req, res= response )  => {
    res.status(403).json({
        message: 'get API RESTful - Controller'
    })
}

const post = async(req, res= response) => {
    res.status(403).json({
        message: 'post API RESTful - Controller'
    })
}

const put = async(req, res= response) => {
    res.status(403).json({
        message: 'put API RESTful - Controller'
    })
}

const patch = async(req, res) => {
    res.status(403).json({
          message: 'patch API RESTful - Controller'
      })
  }


const del = async(req, res) => {
    res.status(403).json({
        message: 'delete API RESTful - Controller'
    })
}

export const UserController = {
    // register,
    // login,
    get,
    post,
    put,
    patch,
    del,
}