//your JS code here. If required.
let ele=document.GetElementById('level');
let lvl=0;
while(ele){
	lvl++;
	ele=ele.parentElement;
}
alert(`The level of the element is:${lvl}``);