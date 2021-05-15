from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import ValidationError, DataRequired

class CommentForm(FlaskForm):
    
    content = StringField('Comment', [DataRequired()])