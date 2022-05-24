// Global
app.global = {
    init: function(){ // Load all global functions here
        console.log("load global functions");
        app.global.loadHeader();21
    },
    loadHeader: function(){ // Some specific function
        console.log("loadHeader()");
    }
}

// Run the global stuff
app.global.init();