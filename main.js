firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	document.getElementByID("user_div").style.display="block";
	document.getElementByID("login_div").style.display="none";
	
	var user = firebase.auth().currentuser;
	
	if(user !=null){
		
		var email_id=user.email;
		document.getElementByID("user_para").innerHTML="Welcome User : " +email;
	
  } else {
    // No user is signed in.
	document.getElementByID("user_div").style.display="none";
	document.getElementByID("login_div"

).style.display="block";
  }
};

function login(){
	var userEmail = document.getElementByID("email_field").value;
	var userPass=document.getElementByID("password_field").value;

	firebase.auth().SignInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message; 
  // ...
});
	
//function signup(){
	btn-signup.addEventListener('click', e =>{
	var userEmail = document.getElementByID("email_field").value;
	var userPass=document.getElementByID("password_field").value;

	const promise = firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
	promise
	.catch(e=>console.log(e.message));
  
};

  firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser)
	{console.log(firebaseUser)}
else{
console.log("not loggedin");
}
	
function logout(){
	firebase.auth().signOut()
	);


