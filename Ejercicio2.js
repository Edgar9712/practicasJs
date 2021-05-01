
export interface iUser {
    yearBirth :string,
    monthBirth: string,
    dayBirth:string,
    id:string,
    name:string,
    añosAc:number
}

const directory =[
    {
      "id": "1",
      "email": "ricardo.jimenez@axity.com"
    },
    {
      "id": "2",
      "email": "jesus.avila@axity.com"
    },
    {
      "id": "3",
      "email": "rocio.esteban@axity.com"
    },
    {
      "id": "4",
      "email": "laura.perez@axity.com"
    },
    {
      "id": "5",
      "email": "francisco.hernandez@axity.com"
    },
    {
      "id": "6",
      "email": "carlos.juarez@axity.com"
    },
    {
      "id": "7",
      "email": "javier.hernandez@axity.com"
    },{
      "id": "8",
      "email": "elizabeth.contreras@axity.com"
    }
  ];
  
const users = [
    {
      "id": "1",
      "name": "Ricardo",
      "lastName": "Jimenez",
      "email": "ricardo.jimenez@axity.com",
      "yearBirth": "1988",
      "monthBirth": "03",
      "dayBirth": "05",
      "status": "active"
    },
    {
      "id": "2",
      "name": "Jesus",
      "lastName": "Avila",
      "email": "jesus.avila@axity.com",
      "yearBirth": "1989",
      "monthBirth": "02",
      "dayBirth": "04",
      "status": "active"
    },
    {
      "id": "3",
      "name": "Rocio",
      "lastName": "Esteban",
      "email": "rocio.esteban@axity.com",
      "yearBirth": "1987",
      "monthBirth": "01",
      "dayBirth": "03",
      "status": "active"
    },
    {
      "id": "4",
      "name": "Laura",
      "lastName": "Perez",
      "email": "laura.perez@axity.com",
      "yearBirth": "1990",
      "monthBirth": "01",
      "dayBirth": "23",
      "status": "active"
    },
    {
      "id": "5",
      "name": "Francisco",
      "lastName": "Hernadez",
      "email": "francisco.hernandez@axity.com",
      "yearBirth": "1963",
      "monthBirth": "04",
      "dayBirth": "04",
      "status": "active"
    },
    {
      "id": "6",
      "name": "Carlos",
      "lastName": "Juarez",
      "email": "carlos.juarez@axity.com",
      "yearBirth": "1992",
      "monthBirth": "10",
      "dayBirth": "29",
      "status": "active"
    },
    {
      "id": "7",
      "name": "Javier",
      "lastName": "Hernandez",
      "email": "javier.hernandez@axity.com",
      "yearBirth": "1985",
      "monthBirth": "05",
      "dayBirth": "19",
      "status": "false"
    },{
      "id": "8",
      "name": "Elizabeth",
      "lastName": "Contreras",
      "email": "elizabeth.contreras@axity.com",
      "yearBirth": "1984",
      "monthBirth": "10",
      "dayBirth": "29",
      "status": "active"
    }
  ];


  
class clsuser implements iUser{
    
    yearBirth :string;
    monthBirth: string;
    dayBirth:string;
    id: string;
    name:string;
    añosAc:number;


    constructor( private email: string){
        this.id=this.usuarioid(email);
        this.yearBirth= this.usuarioyear(this.id);
        this.monthBirth= this.usuariomonth(this.id);
        this.dayBirth= this.usuarioday( this.id);
        this.name=this.nombre(this.id);
        this.añosAc=this.añosCumplidos(this.dayBirth,  this.monthBirth,  this.yearBirth);
    }

           
    usuarioid(email:string ): string {
                            for(let clave in directory){
                                        if (directory[clave].email==email)
                                        {
                                            return directory[clave].id; 
                                        }
         
                             }
                 }
     
   usuarioyear(id:string ): string {
                            for(let clave in users){
                                        if (users[clave].id==id)
                                        {
                                            return users[clave].yearBirth; 
                                        }
         
                             }
                 }
   
                
    usuariomonth(id:string ): string {
                            for(let clave in users){
                                        if (users[clave].id==id)
                                        {
                                            return users[clave].monthBirth; 
                                        }
        
                            }
                }

    usuarioday(id:string ): string {
                    for(let clave in users){
                                if (users[clave].id==id)
                                {
                                    return users[clave].dayBirth; 
                                }

                    }
        }
    
    nombre(id:string ): string {
            for(let clave in users){
                        if (users[clave].id==id)
                        {
                            return users[clave].name+'-'+users[clave].lastName; 
                        }

                    }   
        }

        añosCumplidos(dayBirth:string, monthBirth:string, yearBirth:string){
            let fechaNac=new Date(yearBirth +'-'+monthBirth+'-'+dayBirth);
            let fecha=new Date(Date.now());
            var yearsold= fecha.getFullYear()-fechaNac.getFullYear();
            return yearsold;
        }
}          
     let ins_clsuser:clsuser;
     let correo:string;
     correo= prompt("Dame el correo:");
     ins_clsuser=new clsuser(correo);

  

     console.log(`El nombre es ${ins_clsuser.name}, su fecha de nacimiento ${ins_clsuser.dayBirth}/${ins_clsuser.monthBirth}/${ins_clsuser.yearBirth} y su edad es ${ins_clsuser.añosAc} años`);
     
        
