var UETNavigation = document.querySelector('.block_navigation');

if (UETNavigation) {
    var courseName = [];
    var courseIdList = UETNavigation.querySelectorAll('li.type_course.depth_3')
    for (let i = 0; i < courseIdList.length; i++) {
        var currentCourseInfo = courseIdList[i].innerText;
        var currentCourseId = currentCourseInfo.split('_')[1];
        var currentCourseClass = currentCourseInfo.split('_')[2];
        var currentCourseName = courseIdList[i].querySelector('a');
        var findClass = currentCourseName.title.split('(');
        currentCourseName.innerText = findClass[0] + "\n"
        if (currentCourseId && currentCourseClass) {
            if (currentCourseClass.length > 3) {
                currentCourseClass = currentCourseClass.slice(0, 2);
            }
            currentCourseName.innerText += `(${currentCourseId} ` + currentCourseClass.slice(0,2).trim() + ")";
            console.log(currentCourseName.innerText);
        }

    }
}