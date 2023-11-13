// document.getElementById('download_cv').addEventListener('click', function(event) {
//     event.preventDefault();

//     var file = 'C:\Users\Apet\Desktop\APET WEB PRACTICE\portfolio\files\CV.pdf';
//     var a = document.createElement('a');

//     a.download = 'CV.pdf';
//     a.href=file;

//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);


// });

document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded'); // Check if the script is loaded

    var downloadLink = document.getElementById('download_cv');

    if (downloadLink) {
        console.log('Download link found'); // Check if the element with id 'download_cv' is found
        downloadLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the anchor element

            var fileUrl = 'files\\CV.pdf';
            var a = document.createElement('a');
            a.download = 'your-cv.pdf';
            a.href = fileUrl;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    } else {
        console.log('Download link not found'); // Log an error message if the element is not found
    }
});
