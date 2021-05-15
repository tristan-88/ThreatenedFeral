from flask.cli import AppGroup
from .users import seed_users, undo_users
from .animals import seed_animals, undo_animals
from .photos import seed_photos, undo_photos
from .locations import seed_locations, undo_locations
from .animal_locations import seed_animal_locations, undo_animal_locations
from .comments import seed_comments, undo_comments
from .educators import seed_educators, undo_educators
from .animal_educators import seed_animal_educators, undo_animal_educators
from .non_profit_orgs import seed_non_profit_orgs, undo_non_profit_orgs
from .favorite_animal_lists import seed_favorite_animal_lists,undo_favorite_animal_lists
from .favorite_educator_lists import seed_favorite_educator_list, undo_favorite_educator_lists
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_animals()
    seed_photos()
    seed_locations()
    seed_animal_locations()
    seed_comments()
    seed_educators()
    seed_animal_educators()
    seed_non_profit_orgs()
    seed_favorite_educator_list()
    seed_favorite_animal_lists()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_animals()
    undo_photos()
    undo_locations()
    undo_animal_locations()
    undo_comments()
    undo_educators()
    undo_animal_educators()
    undo_non_profit_orgs()
    undo_favorite_animal_lists()
    undo_favorite_educator_lists()
    # Add other undo functions here
