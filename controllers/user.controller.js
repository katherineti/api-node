import { request, response } from "express"

const getAll = async(req, res= response )  => {
    res.status(403).json({
        message: 'get API RESTful - Controller'
    })
}

const get = async(req=request, res= response )  => {

    const { name='No name' } = req.query;

    res.status(403).json({
        message: 'get API RESTful - Controller',
        name
    })
}

const post = async(req, res= response) => {

    const { name, age } = req.body

    res.status(403).json({
        message: 'post API RESTful - Controller',
        name,
        age
    })
}

const put = async(req, res= response) => {

    const id = req.params.id;

    res.status(403).json({
        message: 'put API RESTful - Controller',
        id
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