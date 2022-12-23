import { Vue, Emit, Component } from 'nuxt-property-decorator';
import HelperMethods from '@/shared/helper-methods';

export const statusUri = '/ember/burner-status';

@Component
export default class BaseComponent extends Vue {
  public loading: number = 0;
  public buttonBusyLoader: boolean = false;

  // Getters
  get isLoading(): boolean {
    return this.loading > 0;
  }


  protected catch(error: any, sendLog: boolean = true, logSilently: boolean = false): void {
    HelperMethods.catch(this.$axios, error, sendLog, logSilently);
  }

  // Public Methods
  @Emit('update-loading')
  public updateLoading(newTask: boolean): void {
    if (newTask) {
      this.loading++;
    } else if (this.loading > 0) {
      this.loading--;
    }
  }

}
