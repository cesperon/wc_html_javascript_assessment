
-- A list of last names shared by two or more students.
SELECT last_name, COUNT(*) as name_count
FROM students
GROUP BY last_name
HAVING name_count > 1
ORDER BY last_name ASC;

-- -- A list of teachers with first_name, last_name,teacher_id that have taught less than 30 classes. 
SELECT teacher_id, first_name, last_name, num_class_taught as 'number of classes taught'
FROM(SELECT first_name, last_name, ltc.teacher_id as teacher_id, COUNT(*) as num_class_taught
FROM teachers t
JOIN lkp_teachers_classes ltc
	ON t.id = ltc.teacher_id
GROUP BY teacher_id) as T
WHERE num_class_taught < 30
ORDER BY teacher_id;


-- The full name, year, and GPA of the best student of each year.
SELECT year, first_name, last_name, max(average_grade) as gpa
FROM( 
select s.year as year, first_name, last_name, student_id, AVG(grade) as average_grade
from lkp_students_classes lsc
JOIN students s ON s.id = student_id 
GROUP BY student_id) as T
GROUP BY year
ORDER BY year;