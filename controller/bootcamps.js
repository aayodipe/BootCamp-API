// import Model 
import bootcampModel from '../models/BootcampSchema.js';

// @desc      Get all Bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
export const getBootCamps = async (req,res,next)=> {

    try {
        const bootcamp = await bootcampModel.find();
        res.status(200).json({
            success: true,
            count: bootcamp.length,
            data: bootcamp
        });
    }   
    catch(err){
        res.status(400)
        res.json({
            success:false,
            err_message: err.message
        })
    }


}
// @desc      Get single Bootcamps
// @route     GET /api/v1/bootcamps/:id
// @access    Public
export const getBootCamp = async (req, res, next)=> {
    try {
        const bootcamp = await bootcampModel.findById(req.params.id)
        //throw err if the param:id from the req.param:id is not sample format with the schema
       if(!bootcamp) {
           return res.status(400).json({
               success:false,
               data:`Item with id ${req.params.id} has been deleted`
           })
       }
            res.status(200)
            .json({
                success:true,
                count:bootcamp.length,
                data:bootcamp
                
            
            })

    }
    catch(err){
        res.status(400)
        .json({
            success:false,
            err_message: err.message
        })
    }
      
}
// @desc      Create new Bootcamp
// @route     GET /api/v1/bootcamps
// @access    Private
export const createBootCamp = async (req, res, next)=> {
    try {
        const bootcamp =  await bootcampModel.create(req.body);
        res.status(201)
        .json({
            sucess:'Ok',
            data: bootcamp
        })
    }
    catch(err){
       res.status(400),
       res.json({
           success:false,
           err_message: err.message
       })
    }  
   
}
// @desc      Update single Bootcamp
// @route     PUut /api/v1/bootcamps/:id
// @access    Private
export const updateBootCamp = async (req, res, next) => {
    try {
    const bootcamp = await bootcampModel.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true})

     //throw err if the param:id from the req.param:id is not sample format with the schema
     if(!bootcamp) {
        return res.status(400).json({
            success:false
        })
    }
        res.status(201)
        .json({
            sucess:'Ok',
            data: bootcamp
        })
    }
    catch(err){
       res.status(400),
       res.json({
           success:false,
           err_message: err.message
       })
    }  
   
}
// @desc      Delete single  Bootcamp
// @route     Delete /api/v1/bootcamps/:id
// @access    Private
export const deleteBootCamp = async(req,res,next) => {
    try {
        const bootcamp = await bootcampModel.findByIdAndRemove(req.params.id)
    
         //throw err if the param:id from the req.param:id is not sample format with the schema
         if(!bootcamp) {
            return res.status(400).json({
                success:false
            })
        }
            res.status(201)
            .json({
                sucess:'Ok',
                data: 'One Item Deleted'
            })
        }
        catch(err){
           res.status(400),
           res.json({
               success:false,
               err_message: err.message
           })
        }  
       

}