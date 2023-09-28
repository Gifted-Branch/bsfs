from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in bsfs/__init__.py
from bsfs import __version__ as version

setup(
	name="bsfs",
	version=version,
	description="Custom App",
	author="Gifted Branch",
	author_email="giftedbranch@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
