let users ={
  "usuari1@prom.cat":{
  	id: "usuari1@prom.cat",
  	pw: "1234"
  }
}

export function signIn(email, password){
	console.log(email, password)
	let usersArray =Object.keys(users)
	console.log(usersArray)
	if(usersArray.indexOf(email)!==-1){
		console.log(usersArray.indexOf(email))
		if (users[email].pw=== password){
			console.log('true')
			return true
		} else{
			let PwdNoCorrecte = new ExcepcioUsuari("La paraula de pas no és correcte");
      		throw PwdNoCorrecte;
		}
	} else {
		let UsuariNoExisteix = new ExcepcioUsuari("No existeix l'usuari");
		console.log(UsuariNoExisteix)
      	throw UsuariNoExisteix;
	}	
}

export function signUp({username, password}){
	console.log(username, password)
	let isNewUser =Object.keys(users).some(uname => uname===username)
	console.log(isNewUser)
	if (isNewUser) {
		console.log('aquest usuari ja existeix')
		const newUSer ={
			username:username,
			password: password
		}
		return newUSer 
	} else {
		console.log('usuari creat')
		users ={
			...users,
			[username]:{
				id:username,
				pw: password
			}
		}
		const newUSer ={
			username:username,
			password: password
		}
		return newUSer 
	}
	
}

function ExcepcioUsuari(missatge) {
   this.missatge = missatge;
   this.nom = "ExcepcioUsuari";
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}
