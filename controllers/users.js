const User = require("../Models/user");

module.exports.signup = async(req,res)=>{
    try{
    let {username , email , password } = req.body;
    const newUser = new User({email , username});
    const registeredUser = await User.register(newUser,password);
    console.log(registeredUser);
    req.login(registeredUser,(err)=>{
        if(err){
           return next(err);
        }
         req.flash("success","welcome to AirBnB!");
         res.redirect("/listings");
      })
    }catch(er){
        req.flash("error", er.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req,res)=>{
    if (req.headers.referer && !req.headers.referer.includes("/login")) {
        req.session.redirectUrl = req.headers.referer;
    }
    res.render("./users/login.ejs");
};

module.exports.login = async(req,res)=>{

        req.flash("success","Welcome back to your AirBnB Account !!"); 
        let redirectUrl = res.locals.redirectUrl || "/listings" ;
        res.redirect(redirectUrl);
};

module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","LogOut Successfully !");
        res.redirect("/listings");
    });
};