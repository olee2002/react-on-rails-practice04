class Api::TeachersController < ApplicationController

    def index
        @teachers = Teacher.all
        render json: @teachers
    end
    
    def create
        @teacher= Teacher.create(teacher_params)
    end

    def update
        @teacher = Teacher.find(params[:id])
        @teacher.update(teacher_params)
    end

    def destroy
        @teacher = Teacher.destroy(params[:id])
        @teachers = Teacher.all
        render json: @teachers
    end

    private
    def teacher_params
        params.require(:teacher).permit(:name, :subject, email)
    end

end
