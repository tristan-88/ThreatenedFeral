from app.forms.comment_form import CommentForm
from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from app.models import comment, db, User, Animal, Comment
from app.forms import CommentForm
from sqlalchemy import desc, asc

comment_routes = Blueprint('comments', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages

#all comment tested
@comment_routes.route('/')
def get_comments():
    comments = Comment.query.order_by.desc().all()
    return {"comments": [comment.to_dict() for comment in comments]}

#single comment tested
@comment_routes.route('/<int:id>/')
def get_comment(id):
    comment = Comment.query.get(id)
    return comment.to_dict()

#deleted a singlecomment tested
@comment_routes.route('/', methods=['DELETE'])
def delete_comment():
    comment_id = request.json['commentId']
    comment = Comment.query.get(comment_id)
    db.session.delete(comment)
    db.session.commit()
    return {'message': "comment has been deleted"}


@comment_routes.route('/', methods= ['PATCH'])
def edit_comment():
    comment_id = request.json['commentId']
    new_content = request.json['content']
    if not new_content:
        return {"message": "Content Required"}, 401
    comment = Comment.query.get(comment_id)
    comment.content = new_content
    db.session.commit()
    return {'comment':comment.to_dict()}

@comment_routes.route('/', methods= ['POST'])
def post_comment():
    new_content = request.json['content']
    current_animal_id  = request.json['animalId']
    if not new_content:
        return {"message": "Content Required"}, 401
    comment = Comment(
        user_id = current_user.id,
        animal_id = current_animal_id,
        content = new_content
    )
    db.session.add(comment)
    db.session.commit()
    return {'comment':comment.to_dict()}