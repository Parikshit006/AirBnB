const Listing = require("../Models/listing");
const getCoordinates = require("../utils/geoCode");


module.exports.index = async(req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListings = async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({
        path : "reviews",
        populate :{
            path : "author",
        },
    })
     .populate("owner");

    if(!listing){
        req.flash("error", "Listing you requested for does not exist !!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs" , {listing}); 
};

module.exports.createListing = async (req, res) => {

    const geoData = await getCoordinates(req.body.listing.location);

    if (!geoData) {
        req.flash("error", "Invalid location. Please try again.");
        return res.redirect("/listings/new");
    }

    const newListing = new Listing(req.body.listing);

    newListing.geometry = geoData;
    newListing.owner = req.user._id;

    if (req.file) {
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename,
        };
    }

    await newListing.save();

    req.flash("success", "New listing is created!!");
    res.redirect("/listings");
};

module.exports.editListing = async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for edit does not exist !!");
        return res.redirect("/listings");
    }

    let originalImage = listing.image.url;
    let originalImageUrl = originalImage.replace("/upload", "/upload/h_200,w_250");
    res.render("listings/edit.ejs",{listing,originalImageUrl});
};

module.exports.updateListing = async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url,filename};
    await listing.save(); 
    }

     req.flash("success", " listing is updated!!");
    res.redirect(`/listings/${id}`); 
};

module.exports.deleteListing = async (req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
     req.flash("success", " listing is deleted!!");
    res.redirect("/listings");
};