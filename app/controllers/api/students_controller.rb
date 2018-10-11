class Api::StudentsController < ApplicationController
    def index
        @teacher = Teacher.find(params[:teacher_id])
        @students = @teacher.students.all
        render json: @students
    end
    
    def create
        @teacher = Teacher.find(params[:teacher_id])
        @teacher.students.create(student_params)
    end

    def update
        @student = Student.find(params[:id])
        @student.update(student_params)
    end

    def destroy
        @student = Student.destroy(params[:id])
        @teacher = Teacher.find(params[:teacher_id])
        @students = @teacher.students.all
        render json: @students
    end

    private
    def student_params
        params.require(:Student).permit(:name, :grade, email)
    end
end
