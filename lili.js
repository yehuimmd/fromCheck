//提交表单的函数
function reg()
	{
	window.open("https://www.baidu.com/index.php?tn=monline_3_dg",
		"new","toolbar=yes,menubar=yes");
	}
function init(element)
//初始化，将光标定位到指定的表单；
{
	element.focus();
	}
//提交前对所提交的数据进行检查，只有所有检查都通过，才将数据进行提交；
function Check()
{
	flag=false;
	if(CheckUserName()==false)
	   { return !flag;}
	if(CheckPassword()==false)
	 	 { return !flag;}
	if(CheckEmail()==false)
	 	 { return !flag;}
  	return !flag;
	}
	//检查用户名是否为空；
	function CheckUserName()
		{
		if(document.Verify_form.UserName.value.length==0)
			{
			error(document.Verify_form.UserName,"对不起，用户名必须输入！");
				return false;
				}
			else
				return true;
			}
	//检查E_mail地址输入是否正确；
	function CheckEmail()
		{
			if(document.Verify_form.E_mail.value.indexOf('@',1)==-1)
			{error(document.Verify_form.E_mail,"电子邮件地址错误！");
				return false;
				}
			else 
				return true;
			}
	//检查密码输入是否正确
	function CheckPassword()
	{
		if(document.Verify_form.Password.value.length<2)
			{
		error(document.Verify_form.Password,"对不起，密码至少为2个字符！");
			return false;
			}
		else 
			{
	if(document.Verify_form.Password.value!=document.Verify_form.Againpass.value)
				{
	  error(document.Verify_form.Againpass,"两次输入的密码不一致，请重新输入！");
					return false;
					}
				else
					return true;
				}
			}
	//显示错误信息的函数
	function error(element,text){
		window.alert(text);
		element.select();
		element.focus();
		flag=true;} 