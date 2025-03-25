import Stack from '@mui/material/Stack';

import { getTeas } from '@/server/teas/teas';
import { Tea } from '@/models/teas/teas.models';

export default async function TeaList() {
  const teas: Tea[] = await getTeas();

  return (
    <Stack direction="column" spacing={ 1 }>
      { teas.map((tea) => {
        return (
          <Stack key={ tea.name }>
            <section>
              <p>{ tea.display }</p>
            </section>
          </Stack>
        );
      }) }
    </Stack>
  );
}
