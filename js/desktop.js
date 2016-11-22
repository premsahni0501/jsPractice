function openApp(appID)
{
  var app_id = appID.replace("Icon","");
  document.getElementById(app_id).style.display = "inline-block";
  document.getElementById(app_id+"Icon").style.width = "90px";
  document.getElementById(app_id+"Icon").style.height = "90px";
}

function closeApp(appID)
{
  var app_id = document.getElementById(appID).parentElement.parentElement.id;
  console.log("id:"+app_id);
  document.getElementById(app_id).style.display = "none";
}

function toTop(id,className)
{
  var allContainers = document.getElementsByClassName(className);
  var noOfContainers = allContainers.length;

  for(var i = 0; i < noOfContainers; i++)
  {
    if(allContainers[i].getAttribute("id") == id)
    {
      document.getElementById(id).style.zIndex = 10;
      document.getElementById(id+"Icon").style.width = "90px";
      document.getElementById(id+"Icon").style.height = "90px";
    }
    else{
        allContainers[i].style.zIndex = 0;
        document.getElementById(allContainers[i].getAttribute("id")+"Icon").style.width = "80px";
        document.getElementById(allContainers[i].getAttribute("id")+"Icon").style.height = "80px";
    }
  }
}

var mydragg = function(){
                return {
                    move : function(divid,xpos,ypos){
                        divid.style.left = xpos + 'px';
                        divid.style.top = ypos + 'px';
                    },
                    startMoving : function(divid,container,evt){
                        evt = evt || window.event;
                        var posX = evt.clientX,
                            posY = evt.clientY,
                        divTop = divid.style.top,
                        divLeft = divid.style.left,
						eWi = parseInt(divid.style.width),
						eHe = parseInt(divid.style.height),
						cWi = parseInt(document.getElementById(container).style.width),
						cHe = parseInt(document.getElementById(container).style.height);
						document.getElementById(container).style.cursor='move';
                        divTop = divTop.replace('px','');
                        divLeft = divLeft.replace('px','');
                        var diffX = posX - divLeft,
                            diffY = posY - divTop;
                        document.onmousemove = function(evt){
                            evt = evt || window.event;
                            var posX = evt.clientX,
                                posY = evt.clientY,
                                aX = posX - diffX,
                                aY = posY - diffY;
								if (aX < 0) aX = 0;
								if (aY < 0) aY = 0;
								if (aX + eWi > cWi) aX = cWi - eWi;
								if (aY + eHe > cHe) aY = cHe -eHe;
                            mydragg.move(divid,aX,aY);
                        }
                    },
                    stopMoving : function(container){
                        var a = document.createElement('script');
						document.getElementById(container).style.cursor='default';
                        document.onmousemove = function(){}
                    },
                }
            }();
