var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};


exports.addRSVP = function(request,response) {
console.log(rsvpEmail);

data.rsvp.push(rsvpEmail);

response.send(rsvpEmail);


};
