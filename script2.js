if(sessionStorage)
      {
          	if(sessionStorage.getItem("hasRefresh")==null || sessionStorage.getItem("hasRefresh")=="True")		
          	{
          		sessionStorage.setItem("hasRefresh","False");
          		setTimeout(function(){window.location.reload();},5000);
          	}
      }
      else{

      }