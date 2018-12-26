function micsorare(imagini, i)
{
	let articol = document.getElementsByClassName("backc");
	articol[0].style.background = "rgba(255,255,255, 50%)";
	articol[0].style.color = "#000000";

	for(let j = 0; j < imagini.length; j++)
	{
		if (i === j)
		{
			imagini[j].style.width = "300px";
			imagini[j].style.height = "200px";
			imagini[j].style.position = "";
			imagini[j].style.top = "";
		}

		else
		{
			imagini[j].style.display = "block";
		}
	}

	imagini[i].onclick = function()
	{
		marire(imagini, i);
	}
}

function marire(imagini, i)
{
	let articol = document.getElementsByClassName("backc");
	articol[0].style.background = "transparent";
	articol[0].style.color = "transparent";
	for(let j = 0; j < imagini.length; j++)
	{
		if(i === j)
		{
			imagini[j].style.width = "91%";
			imagini[j].style.height = "auto";
			imagini[j].style.position = "absolute";
			imagini[j].style.top = "3%";
		}
		else
		{
			imagini[j].style.display = "none";
		}
	
	}

	imagini[i].onclick = function()
	{
		micsorare(imagini, i);
	}
}

window.onload = function()
{
	// document.getelementbyId
	let imagini = document.querySelectorAll("ol img");
	for(let i = 0; i < imagini.length; i++)
	{
		imagini[i].onclick = function()
		{
			marire(imagini, i);
		}
	}
}