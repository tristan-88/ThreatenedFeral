"""fixed educator

Revision ID: a3674fd907f4
Revises: 6af7bd264df4
Create Date: 2021-05-06 23:41:01.075321

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a3674fd907f4'
down_revision = '6af7bd264df4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('educators_animal_id_fkey', 'educators', type_='foreignkey')
    op.drop_column('educators', 'animal_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('educators', sa.Column('animal_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('educators_animal_id_fkey', 'educators', 'animals', ['animal_id'], ['id'])
    # ### end Alembic commands ###
