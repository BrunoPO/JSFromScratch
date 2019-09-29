var log = {
    info: function (info) { 
        console.log('Info: ' + info + '\n');
    },
    warning:function (warning) { 
        console.log('Warning: ' + warning+ '\n');
    },
    error:function (error) { 
        console.log('Error: ' + error+ '\n');
    }
};

// What make this module a module is the command line below
// It's commom to have a obj or construtor on the export.
module.exports = log
