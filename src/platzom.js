function esPalindromo(cad){
	let cadRet="";
	for(let i=cad.length-1;i>=0;i--)
		cadRet+=cad.charAt(i);
	return cad==cadRet;
}

function intercala(cad){
	let rev="";
	for(let i=0;i<cad.length;i++)
		(i%2==0) ? rev+=cad.toLowerCase().charAt(i) : rev+=cad.toUpperCase().charAt(i)
	return rev
}

export default function platzom(str){
	if(esPalindromo(str.toLowerCase()))//si es palindroma
		return intercala(str)
	else{
		if(str.substring(str.length-2,str.length).toLowerCase()=="ar")//si termina en 'ar'
			str = str.substring(0,str.length-2)
		if(str.charAt(0).toLowerCase()=="z")//si comienza con z
			str+="pe"
		if(str.length>=10)//si tiene mas de 10 letras
			str=str.substring(0,str.length/2)+"-"+str.substring(str.length/2,str.length)
		return str
	}
}