import json
import os

# Arquivo inteiramente criado por IA para facilitar a adição de dados nos arquivos JSON.

# -----------------------------
# File paths
# -----------------------------
FILES = {
    "albums": "albums.json",
    "artists": "artists.json",
    "musics": "musics.json"
}


# -----------------------------
# JSON helpers
# -----------------------------
def load_json(filename):
    if not os.path.exists(filename):
        return []

    with open(filename, "r", encoding="utf-8") as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            return []


def save_json(filename, data):
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)


def generate_id(data):
    if not data:
        return 1
    return max(item["id"] for item in data) + 1


def input_or_none(prompt):
    value = input(prompt).strip()
    return value if value else None


# -----------------------------
# Add album
# -----------------------------
def add_album():
    albums = load_json(FILES["albums"])

    album = {
        "id": generate_id(albums),
        "name": input("Album name: "),
        "platforms": {
            "youtube": input_or_none("YouTube link: "),
            "apple_music": input_or_none("Apple Music link: "),
            "spotify": input_or_none("Spotify link: ")
        },
        "img": input_or_none("Image file name: "),
        "year": int(input("Year: "))
    }

    albums.append(album)
    save_json(FILES["albums"], albums)

    print("✅ Album added!")


# -----------------------------
# Add artist
# -----------------------------
def add_artist():
    artists = load_json(FILES["artists"])

    artist = {
        "id": generate_id(artists),
        "name": input("Artist name: "),
        "platforms": {
            "youtube": input_or_none("YouTube link: "),
            "apple_music": input_or_none("Apple Music link: "),
            "spotify": input_or_none("Spotify link: ")
        },
        "img": input_or_none("Image file name: ")
    }

    artists.append(artist)
    save_json(FILES["artists"], artists)

    print("✅ Artist added!")


# -----------------------------
# Add music
# -----------------------------
def add_music():
    musics = load_json(FILES["musics"])

    print("\nEnter artist IDs separated by commas (example: 1,2,3)")
    artist_ids = input("Artists: ")
    artist_ids = [int(i.strip()) for i in artist_ids.split(",") if i.strip()]

    print("\nEnter genres separated by commas")
    genres = input("Genres: ")
    genres = [g.strip() for g in genres.split(",") if g.strip()]

    album_id = input_or_none("Album ID (leave empty if none): ")
    album_id = int(album_id) if album_id else None

    music = {
        "id": generate_id(musics),
        "title": input("Title: "),
        "artists": artist_ids,
        "year": int(input("Year: ")),
        "genres": genres,
        "platforms": {
            "youtube": input_or_none("YouTube link: "),
            "apple_music": input_or_none("Apple Music link: "),
            "spotify": input_or_none("Spotify link: ")
        },
        "album": album_id,
        "file": input_or_none("Music file name: ")
    }

    musics.append(music)
    save_json(FILES["musics"], musics)

    print("✅ Music added!")


# -----------------------------
# Main menu
# -----------------------------
def main():
    while True:
        print("\nWhat do you want to add?")
        print("1 - album")
        print("2 - music")
        print("3 - artist")
        print("0 - exit")

        choice = input("> ").strip()

        if choice == "1":
            add_album()
        elif choice == "2":
            add_music()
        elif choice == "3":
            add_artist()
        elif choice == "0":
            break
        else:
            print("Invalid option!")


if __name__ == "__main__":
    main()
