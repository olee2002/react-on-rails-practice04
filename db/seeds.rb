# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Student.delete_all
Teacher.delete_all

martha = Teacher.create(
    name:'martha jackson',
    subject:'English',
    email:'mather@tt.com'
)

james = Teacher.create(
    name:'james Martin',
    subject:'Math',
    email:'james@tt.com'
)

david = Teacher.create(
    name:'david Parkson',
    subject:'History',
    email:'david@tt.com'
)

jamie = martha.students.create(
    name:'jamie Jack',
    grade:60,
    email:'jj@tt.com'
)

mimi = david.students.create(
    name:'mimi Tack',
    grade:90,
    email:'mt@tt.com'
)