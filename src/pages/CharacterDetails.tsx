import { useCharacterDetails } from '../hooks/useCharacterDetails';

function CharacterDetails() {
  const mockForTest = 1011334;

  const { character, comics, isLoading, error } = useCharacterDetails(mockForTest);

  console.log({ comics });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred</div>;

  return <pre>{JSON.stringify(character, null, 2)}</pre>;
}

export default CharacterDetails;
