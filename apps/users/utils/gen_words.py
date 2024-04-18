from random import choice, randint

from ..models import User
from .word_engine import adjectives, animals


def generate_random_username() -> str:
    firs_digit = randint(0, 100)
    second_digit = randint(0, 9)

    first_word = choice(adjectives)
    second_word = choice(animals)

    concatenate_str = f"{first_word}{second_word}{firs_digit}{second_digit}"

    username_exists = User.objects.filter(username=concatenate_str).exists()

    if username_exists:
        concatenate_str += "Z"

    return concatenate_str
