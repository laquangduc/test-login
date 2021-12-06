import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import {storage} from '../firebase'
import {ref, uploadBytesResumable,getDownloadURL,uploadBytes} from '@firebase/storage';
import { useNavigate } from 'react-router';

const ProductAdd = (props) => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {

      const file = (data.image[0])
      const storageRef = ref(storage,'products/' + file.name);
      const uploadTask = uploadBytesResumable(storageRef,file);

      console.log(uploadTask)

      uploadBytes(storageRef,file).then(()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>{
          console.log(downloadURL)
          const newProducts = {
            ...data,
            images:downloadURL
          }
          props.onAdd(newProducts)
        })
      })


       
    }
    return (
        <div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <label>Ten san pham</label>
                <input type="text" {...register("name", { required: true })} />
                {errors.name && <span>Field is required</span>} */}
                <label>Anh</label>
                <input type="file" {...register('image', { required: true })} />
                {errors.imgage && <span>Field is required</span>}

                {/* <label>Price</label>
                <input type="number" {...register('price',{ required: true })} />
                {errors.price && <span>Field is required</span>}

                <label>Desc</label>
                <input type="text" {...register('desc')} /> */}
                <button >them</button>
            </form>
        </div>
    )
}

export default ProductAdd



