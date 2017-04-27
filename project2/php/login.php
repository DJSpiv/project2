<html>
<?php
if(isset($_POST['username']) && isset($_POST['password']))
{
	$username=($_POST['username']);
	$password=($_POST['password']);
	$password_HASH=md5($password)
}	

	if(empty($username))
	{
		die "Ivalid Mail Adress";
			}
	if(empty($password)){
		die "Enter your password";
	}
	$con=new MongoClient();
	//selecting the store database
	if($con)
	{
		$db = $con->store;
		//selecting the users collection
		$collection=$db->users;
		$qry = array("username" =>$username, "password" =>$password_HASH);
		$result = $collection->findOne($qry);

		if(!empty($result)){
			echo "You are now logged in";
		}
		else{
			echo "Wrong Username/Password";
		}
		else{
			die("Can't connect to Mongo");
		}
	}
		
		}

		?>