//your JS code here. If required.
let student = {
	name:"Vignesh"
};
student.__proto__.getKeys= function (){
	return Object.keys(this)
}