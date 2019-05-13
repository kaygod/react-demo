import axios from 'axios';

export const get = (parmas)=>{
  
   return new Promise((resolve,reject)=>{

        axios.get(parmas.url)
        .then((res)=>{
           if(typeof res == "string"){
              res=JSON.parse(res);
           }
           resolve(res.data);
        })
        .catch((error)=>{
          reject();
          console.log(error);
        })

   })  

}

export const dataResolve=(params)=>{ 
  return {
    type:{
      isFetching:{
          url:params.url,
          types:transformObject(params.types)
      }
    }
  }
}

const transformObject=(params)=>{
  return params.map((v)=>{
    return {
        type:v
    }
  })
}